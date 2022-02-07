package test;

public class Test {
    
    int pp;
    public static void main(String[] args){
        int num = 10;
        int num2 = 30;

       int sum = addNum(num,num2);
       System.out.println(sum);
        int tt = just(num,num2);
        System.out.println(tt);

        System.out.println();
    }


    public static int addNum(int n1, int n2){
        Test jj = new Test();
        jj.pp = n1;
        int result = n1 + n2;
        return result;
    };
    public static int just(int z, int z1){
        int jj = z + z1;
        return jj;
    };
}
