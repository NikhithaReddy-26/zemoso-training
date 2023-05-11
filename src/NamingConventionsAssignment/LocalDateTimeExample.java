package NamingConventionsAssignment;
import java.time.LocalDateTime;
public class LocalDateTimeExample {
    public static void main(String[] args) {


            LocalDateTime now = LocalDateTime.now();


            int year = now.getYear();
            int month = now.getMonthValue();
            int dayOfMonth = now.getDayOfMonth();
            int hour = now.getHour();
            int minute = now.getMinute();
            int second = now.getSecond();

            System.out.println("Current Date and Time: " + year + "-" + month + "-" + dayOfMonth + " " + hour + ":" + minute + ":" + second);
        }
    }


