#include <iostream>
#include <istream>
#include <fstream>
#include <stdlib.h>
#include <string.h>
#include <vector>
#include <ctime>
#include <chrono>
#include <iomanip>
#include <stack>
#include<windows.h>
using namespace std;


void login();
void registr();
void admin();
void showOutlets();
void foodlist(int outletChoice);
void showBill();
void adminOptions();
void addOutlet();
void addItem();
void loadingbar();
void welcome();

string username; 

class menuItem {
    public:
    int data;
    string name;
    int price;
    int rating;
    int deliveryTime;
    int userCount;
};

class intro{
    public:
        intro(){
            loadingbar();
        }
};

intro obj;

int main() {
    system("cls");
    welcome();
        int choice;
        cout<<"\n\n\n\n***********************************        MENU        ****************************************\n\n";
        cout<<"1.CUSTOMER LOGIN"<<endl;
        cout<<"2.CUSTOMER REGISTER"<<endl;
        cout<<"3.ADMIN SIGN-IN"<<endl;
        cout<<"4.Exit"<<endl;
        cout<<"\nEnter your choice :";
        cin>>choice;
        cout<<endl;

        switch(choice)
        {
                case 1:
                        login();
                        break;
                case 2:
                        registr();
                        break;
                case 3:
                        admin();
                        break;
                case 4:

                        cout<<"Thanks for using this program. Hope to see you soon!\n";
                        break;
                default:
                        system("cls");
                        cout<<"You've made a mistake, please try again..\n"<<endl;
                        Sleep(1000);
                        main();
        }

}

void welcome(){

	char welcome[50]="WELCOME TO";
	char welcome2[50]="BITS FOOD OUTLET MANAGEMENT SYSTEM";
	//char welcome3[50]="MANAGEMENT SYSTEM";
	//char welcome4[50]="SYSTEM";
	cout<<"\n\n\n\n\n\t\t    ";
	for(int wlc=0; wlc<strlen(welcome);wlc++){

		cout<<welcome[wlc];
		Sleep(100);
	}
	cout<<"\n\n\t";
	for(int wlc2=0; wlc2<strlen(welcome2) ;wlc2++){

		cout<<welcome2[wlc2];
		Sleep(100);
	}
	/*cout<<"\n\n\t\t\t\t\t";
	for(int wlc3=0; wlc3<strlen(welcome3) ;wlc3++){

	    cout<<welcome3[wlc3];
		Sleep(100);
	}
	cout<<"\n\n\t\t\t ";
	for(int wlc3=0; wlc3<strlen(welcome4) ;wlc3++){
	    
		cout<<welcome4[wlc3];
		Sleep(100);
	}*/
}

void loadingbar(void){

	for (int i=15;i<=100;i+=5){

		system("cls");

		cout<<"\n\n\n\n\n\n\n\t\t\t\t";
		cout<<i<<" %% Loading...\n\n\t\t";

		cout<<"";

		for (int j=0; j<i;j+=2){
			cout<<" ";
		}
		Sleep(100);
		if(i==90 || i==50 || i==96 || i==83){
			Sleep(100);
		}

	}

}

void login()
{
        int count;
        string user,pass,u,p;
        system("cls");
        cout<<"please enter the following details"<<endl;
        cout<<"USERNAME :";
        cin>>user;
        username = user;
        cout<<"PASSWORD :";
        cin>>pass;

        ifstream input("database.txt");
        while(input>>u>>p)
        {
                if(u==user && p==pass)

                {
                        count=1;
                        system("cls");
                }
        }
        input.close();
        if(count==1)
        {
                cout<<"\nHello "<<user<<"\n<LOGIN SUCCESSFUL>\nThanks for logging in..\n";
                Sleep(1000);
                system("cls");

                cout<<"***********************************************************************\n\n";
                cout<<"                      What do you want to do?                          \n\n";
                cout<<"***********************************************************************\n\n";

                cout<<"1. Order Food"<<endl;
                cout<<"2. Check Transaction History"<<endl;
                cout<<"3. Go back to the welcome screen"<<endl;

                cout<<"\n\n";
                cout<<"Please select your choice: "<<endl;
                int selection;
                cin>>selection;

                system("cls");

                if(selection==1) showOutlets();
                else if(selection==2) showBill();
                else if(selection==3) main();
        }
        else
        {
                cout<<"\nLOGIN ERROR\nPlease check your username and password\n";
                Sleep(1000);
                main();
        }
}

void registr()
{

        string reguser,regpass,ru,rp;
        system("cls");
        cout<<"Enter the username :";
        cin>>reguser;
        cout<<"\nEnter the password :";
        cin>>regpass;

        ofstream reg("database.txt",ios::app);
        reg<<reguser<<' '<<regpass<<endl;
        system("cls");
        cout<<"\nRegistration Sucessful\n";
        main();


}

void admin() {

        int count;
        string user,pass;
        system("cls");
        cout<<"please enter the following details"<<endl;
        cout<<"USERNAME :";
        cin>>user;
        cout<<"PASSWORD :";
        cin>>pass;


        if(user=="admin" && pass=="123") {
            count=1;
            system("cls");
        }
        
        if(count==1)
        {
                cout<<"\nHello"<<user<<"\n<LOGIN SUCCESSFUL>\nThanks for logging in..\n";
                adminOptions();
        }
        else
        {
                cout<<"\nLOGIN ERROR\nPlease check your username and password\n";
                Sleep(1000);
                main();
        }

}

void adminOptions() {

        cout<<"\nHello "<<"Admin"<<"\n<LOGIN SUCCESSFUL>\nThanks for logging in..\n";
        system("cls");

        cout<<"***********************************************************************\n\n";
        cout<<"                               Admin section                            \n\n";
        cout<<"***********************************************************************\n\n";

        cout<<"1. Add Outlet"<<endl;
        cout<<"2. Add Item"<<endl;
        cout<<"3. Go back to the welcome screen"<<endl;

        cout<<"Please select an option: "<<endl;

        int adminChoice;
        cin>>adminChoice;
        if(adminChoice==1) addOutlet();
        else if(adminChoice==2) addItem();
        else if(adminChoice==3) main();

}

void addOutlet() {

        string outletName;
        system("cls");
        cout<<"Enter the name of the outlet :";
        cin>>outletName;

        ofstream add("outlets.txt",ios::app);
        add<<outletName<<endl;
        system("cls");
        cout<<"\nAdded Outlet Sucessful\n";
        system("cls");
        adminOptions();

}

void addItem() {
        string outletName;
        system("cls");
        cout<<"Enter the name of the outlet you want to add the Item to :";
        cin>>outletName;

        menuItem newItem;
        system("cls");
        cout<<"Enter the name of the item :";
        cin>>newItem.name;
        cout<<"Enter the price of the item :";
        cin>>newItem.price;
        cout<<"Enter the deliveryTime of the item :";
        cin>>newItem.deliveryTime;

        newItem.rating = 5;
        newItem.userCount = 1;

        ofstream add(outletName+".txt",ios::app);
        add<<newItem.name<<' '<<newItem.price<<' '<<newItem.rating<<' '<<newItem.deliveryTime<<' '<<newItem.userCount<<endl;
        system("cls");
        cout<<"\nAdded item Sucessfully\n";
        system("cls");
        adminOptions();
}

void showOutlets() {

    
//     vector<string> outlets = {"Yummpies","Hotspot"};
    vector<string> outlets;
    string outletName;

    ifstream ret("outlets.txt");
    while(ret>>outletName) {
             outlets.push_back(outletName);
    }
    ret.close();


    
    cout<<"***********************************************************************\n\n";
    cout<<"                      OUTLETS LIST                                     \n\n";
    cout<<"***********************************************************************\n\n";
    int count = 1;    
    for(string outlet:outlets) {
        cout<<count<<". "<<outlet<<endl;
        count++;
    }
    cout<<"Please select the outlet you want to order from...\n"<<endl;
    cout<<"Enter 0 to go back to the welcome screen"<<endl;
    int outletChoice;
    cin>>outletChoice;
    system("cls");
    if(outletChoice==0){
        main();
    }
    else{
    foodlist(outletChoice);}

}

void foodlist(int outletChoice){

//     menuItem y1,y2,h1,h2;
//     y1.data = 1;
//     y1.name = "Maggi";
//     y1.price = 40;
//     y1.rating = 5;
//     y1.deliveryTime = 5;
//     y1.userCount = 1;

//     y2.data = 2;
//     y2.name = "Sandwich";
//     y2.price = 60;
//     y2.rating = 4;
//     y2.deliveryTime = 10;
//     y2.userCount = 1;

//     h1.data = 1;
//     h1.name = "FriedRice";
//     h1.price = 80;
//     h1.rating = 4;
//     h1.deliveryTime = 15;
//     h1.userCount = 1;

//     h2.data = 2;
//     h2.name = "Biryani";
//     h2.price = 100;
//     h2.rating = 5;
//     h2.deliveryTime = 20;
//     h2.userCount = 1;

//     vector<vector<menuItem>> outletMenu = {{y1,y2},{h1,h2}};

    string outletName;
    ifstream outletInput("outlets.txt");
    vector<vector<menuItem>> outletMenu;
    while(outletInput>>outletName) {

        int count = 1;
        menuItem item;
        ifstream foodInput(outletName+".txt");
        vector<menuItem> items;
        while(foodInput>>item.name>>item.price>>item.rating>>item.deliveryTime>>item.userCount) {
                 item.data = count;
                 count++;
                 items.push_back(item);
        }
        foodInput.close();
        outletMenu.push_back(items);
    }
    outletInput.close();



    vector<menuItem> outlet = outletMenu[outletChoice-1];
    cout<<"***********************************************************************\n\n";
    cout<<"                            MENU ITEMS                                 \n\n";
    cout<<"***********************************************************************\n\n";
    cout<<"No."<<"\t\t\t"<<"Name";
    for(int i=0;i<11;i++){
        cout<<" ";
    }
    cout<<"Price"<<"\t\t\t"<<"Rating"<<"\t\t\t"<<"Estd. Time"<<endl;
    for(menuItem item:outlet) {
    cout<<item.data<<".\t\t\t"<<item.name;
    for(int i=0;i<(15-item.name.length());i++){
        cout<<" ";
    }
    cout<<item.price<<"\t\t\t"<<item.rating<<"\t\t\t"<<item.deliveryTime<<endl;
    }

    cout<<"\n";
    cout<<"Please select the dish you want to order...\n"<<endl;
    cout<<"Enter 0 to go back to outlet selection"<<endl;

    int orderChoice;
    cin>>orderChoice;
    
    if(orderChoice==0){
        showOutlets();
    }
    else{

    menuItem orderedItem = outlet[orderChoice-1];

    cout<<"Please enter the desired quanity..."<<endl;
    int orderQuanity;
    cin>>orderQuanity;

    system("cls");

    cout<<"Calculating your bill..."<<endl;
    int price = orderQuanity * orderedItem.price;
    cout<<"Total Price: "<<price<<endl;

    cout<<"\n\n\n";
    cout<<"Your order estimated delivery time is:  "<<orderedItem.deliveryTime * orderQuanity<<"min."<<endl;


    cout<<"\n\n\n";
    cout<<"Enter payment method"<<endl;
    cout<<"1. Cash on delivery"<<endl;
    cout<<"2. Credit card"<<endl;
    int response;
    cin>>response;

    if(response==1) {

        system("cls");
        
        cout<<"Our delivery person would take "<<price<<" rupees when your order gets delivered!"<<endl;
        Sleep(1000);
        
    }
    
    else if(response==2) {
        cout<<"Please enter your card details\n"<<endl;
        cout<<"DISCLAIMER: We do not store any of your payment details!"<<endl;
        cout<<"Please enter your credit card number"<<endl;
        int card;
        cin>>card;
        cout<<"Please enter your CVV"<<endl;
        int cvv;
        cin>>cvv;
        cout<<"Please enter the otp"<<endl;
        int otp;
        cin>>otp;
        Sleep(1000);
        cout<<"Payment successful!"<<endl;
        Sleep(500);
    }
        system("cls");

        cout<<"Thank you for ordering from us"<<endl;
        cout<<"\n\n";
        cout<<"Please give a rating for the food you ordered, out of 5"<<endl;
        int rating;
        cin>>rating;

        int prevRatingSum = orderedItem.rating * orderedItem.userCount;
        orderedItem.userCount+=1;
        int newRating = (prevRatingSum/orderedItem.userCount);
        orderedItem.rating = newRating;
        system("cls");
        cout<<"Once again!!!Thank you for ordering from us! We hope to see you again soon!"<<endl;
        system("cls");

        std::time_t result = std::time(nullptr);
        string time = std::ctime(&result);

        
        ofstream temp(username+".txt",ios::app);
        temp<<orderedItem.name<<' '<<orderQuanity<<' '<<time<<endl;
        system("cls");
    
    cout<<"Would you like to order more? Press 1 if you want to, else press 2 to go back to the welcome screen."<<endl;
    int aaa;
    cin>>aaa;
    if(aaa==2){
    main();}
    else if(aaa==1){
        showOutlets();
    }
    }
}

void showBill() {

    system("cls");

    string itemName,itemCount,date,day,month,time,year;
    stack<string> st;

    ifstream in(username+".txt");
    cout<<"itemName" << " " << "itemCount" << " " << "month" << " " << "date"<<endl;;
    while(in>>itemName>>itemCount>>day>>month>>date>>time>>year) {
        st.push(itemName + "\t" + itemCount + "\t  " + month + "\t" + date);
    }
    in.close();

    while(!st.empty()) {
        cout<<st.top()<<endl;
        st.pop();
    }
    cout<<"Enter 0 to go back to main menu"<<endl;
    int op;
    cin>>op;
    if(op==0)
    {
        main();
    }
}










