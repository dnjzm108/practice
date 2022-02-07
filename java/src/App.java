// public class App {
//     public static void main(String[] args) throws Exception {
    
//     }
// };


// package classpart;

public class App{
    int studentID;
    String studentName;
    int grade;
    String address;

    public void showStudentInfo(){
        System.out.println(studentName + "주소:"+ address);
    }

    public static void main(String[] args){
        App studentLee = new App();
        studentLee.studentName = "이순신";
        studentLee.address = "거여동";

        App test = new App();
        test.studentName="광화문";
    test.address = "과화문";

        studentLee.showStudentInfo();
        test.showStudentInfo();
        
    }

}