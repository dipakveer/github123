import java.util.Arrays;
import java.util.*;
class sameCharacterWords{
	String sentence;
	sameCharacterWords(String sentence){
		this.sentence=sentence;
	}
	void check_words(){
		int i;
		HashSet <String> my_hashset = new HashSet();
	
		String array[]=sentence.split(" ");
		System.out.println("length of array"+array.length);
		for(i=0;i<array.length;i++){
			char tempArray[] = array[i].toCharArray();           
        // sort tempArray 
        Arrays.sort(tempArray);        
        String string = String.valueOf(tempArray);    
			my_hashset.add(string);			
		}
		
		System.out.println("Same character words "+(array.length-my_hashset.size()));
		
	}
	public static void main(String args[]){
		 sameCharacterWords s = new sameCharacterWords("I SAW THING LAST NIGHT BELOW MY ELBOW IT WAS SALT STONE");
		 System.out.println(s.sentence);
		 
		 s.check_words();
	}
	
}