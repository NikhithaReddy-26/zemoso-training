package assignment1;
import java.io.File;
import java.util.Scanner;
import java.util.regex.Pattern;

public class FileSearch {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String regex = "";
        boolean quit = false;

        while (!quit) {

                System.out.print("Enter a regular expression to search for files(or 'q' to quit): ");
                regex = scanner.nextLine();


                if (regex.equals("q")) {
                    quit = true;
                    break;
                }


                System.out.print("Enter the directory to search (or 'q' to quit): ");
                String directoryName = scanner.nextLine();


                if (directoryName.equals("q")) {
                    quit = true;
                    break;
                }


                File directory = new File(directoryName);


                if (!directory.exists()) {
                    System.out.println("Directory not found: " + directoryName);
                    continue;
                }


                if (!directory.isDirectory()) {
                    System.out.println("Not a directory: " + directoryName);
                    continue;
                }


            String finalRegex = regex;
            File[] matchingFiles = directory.listFiles((dir, name) -> {
                    return Pattern.matches(finalRegex, name);
                });


                if (matchingFiles.length > 0) {
                    System.out.println("Matching files found in " + directory.getAbsolutePath() + ":");
                    for (File file : matchingFiles) {
                        System.out.println(file.getAbsolutePath());
                    }
                } else {
                    System.out.println("No matching files found in " + directory.getAbsolutePath());
                }
            }

            // Close the scanner when finished
            scanner.close();
        }

    }



