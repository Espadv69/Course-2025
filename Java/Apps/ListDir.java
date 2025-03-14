package Apps;

import java.io.File;

public class ListDir {

  public static void main(String[] args) {
    File dir = new File("C:\\Users\\Mañana\\Documents\\Course-2025");
    String[] files = dir.list();

    if (!dir.exists()) {
      System.out.println("The directory does not exist");
      System.exit(0);
    }

    if (files.length > 0) {
      for (String file : files) {
        System.out.println(file);
      }
    } else {
      System.out.println("The directory is empty");
    }

  }

}
