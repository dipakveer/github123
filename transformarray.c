#include <stdio.h>

int main()
{
    int size,i,tmp,temp,k;
    
    printf("Enter the size of an array");
    scanf("%d",&size);
    int array[size];
    
    for(i=0;i<size;i++)
    {
        printf("\nEnter the Element of array\t");
        scanf("%d",&array[i]);
    }
    //tmp=size;
    for(i=0;i<size;i++)
    {
       if(array[i]%5==0)
       {
           for(k=size-1;k>=i;k--){
           
            if(array[k]%5==0){
            }
            else{
               temp=array[k];
               array[k]=array[i];
               array[i]=temp;
               break;
            }
        }
           
       }
        
    }
    for(i=0;i<size;i++){
        printf("Elemtnts of array is %d\n",array[i]);
        }
    
    return 0;
}

