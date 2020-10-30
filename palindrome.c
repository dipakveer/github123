#include<stdio.h>
#include<string.h>
#define CHARS_NO 256
void check_palindrome(char string[]){    
    int i,odd=0;
    int count_array[CHARS_NO]={0};
    for(i=0;i<strlen(string);i++){
    	count_array[string[i]]++;
	}
    for(i=0;i<256;i++){
    	if(count_array[i]%2!=0){
    		odd++;
		}
	}
	if(odd>1){
		printf("%s  is not palindromable",string);
	}
	else{
		printf("%s is plindromable",string);
	}
}
int main(){
     int i,temp,k=0;
    char string[100];     
    printf("Enter the string");
    scanf("%s",&string);    
    check_palindrome(string);
    return 0;
}
