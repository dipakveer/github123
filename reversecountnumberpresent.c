#include <stdio.h>
int reverse(int num)
{
	int temp,number=0;
	while(num!=0){
 	temp=num%10;
 	number=number*10+temp;
 	num=num/10;
 } 
 return number;
 }
int main()
{
    int size,i=0,count=0,k,j;
    
    printf("Enter the size of an array");
    scanf("%d",&size);
    int array[size];
    
    for(i=0;i<size;i++)
    {
        printf("\nEnter the Element of array\t");
        scanf("%d",&array[i]);
    }
	//temp=size;

	for(i=0;i<size;i++){
		
		 k=reverse(array[i]);
		  
		 for(j=i+1;j<size;j++){		 	 
		 	if(k==array[j]){
		 		printf("%d\t",j);
		 		count++;
			 }
		 }
		 		
	}
            printf("\nCount is %d",count);
        
    
    return 0;
}

