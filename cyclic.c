#include <stdio.h>

#include<stdio.h>
#include<string.h>
#define CHARS_NO 256
void check_cyclic(char string1[],char string2[]){ 
	char array[100];
	void *temp;	  
    if(strlen(string1)==strlen(string2)){
    	strcpy(array, string1);    	
    	strcat(array, string1);    	
    	temp=strstr(array,string2);
    	//printf("%s",temp);
    	if(!temp){
    		printf("Not cylcic");
		}
    	else{
    		printf("Cliclic of each other");
		}
	}
	else{
		printf("Not cyclic of each other");
	}
	
}
int main(){
     int k=0;
    char string1[100];
	char string2[100];     
    printf("Enter the string 1");
    scanf("%s",&string1); 
	printf("Enter the string 2");
    scanf("%s",&string2);    
    check_cyclic(string1,string2);
    return 0;
}
