import java.util.*;
public class Shuffle{
    static void randomarray(int a[],int n){
        Random r = new Random();
        for(int i=n-1; i>0;i--){
            int j=r.nextInt(i+1);
            int temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
        System.out.println(Arrays .toString(a));


    }
     public static void main(String[] args) {
        int arr[]={1,2,3,4,5,6};
        int n=arr.length;
        randomarray(arr, n);
        
    }
}