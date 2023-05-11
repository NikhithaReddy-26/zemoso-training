package assignment3;

import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class PingHost {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("given input for no.. of calls to host...");
        int n = sc.nextInt();
        String host = "www.elitceler.tech";
        ArrayList<Long> list = new ArrayList<>();
        for(int i=0; i<n; i++){
            long avgTime = timeRequireToReachAddress(host, 1000);
            list.add(avgTime);
        }
        Collections.sort(list);
        System.out.println(list);
        if(list.size()%2 == 0){
            int mid = list.size()/2;
            int mid2 = mid-1;
            double median = (list.get(mid)+list.get(mid2))/2;
            System.out.println(median);
        }else {
            System.out.println(list.get(list.size()/2));
        }
    }

    private static long timeRequireToReachAddress(String host, int maxTime) {
        try {
            InetAddress address = InetAddress.getByName(host);
            long finishTime;
            long startTime = System.currentTimeMillis();
            if(address.isReachable(maxTime)){
                finishTime = System.currentTimeMillis();
                //return (startTime+(finishTime-startTime))/2;
                return (finishTime-startTime);
            }

        } catch (UnknownHostException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return -1;
    }
}
