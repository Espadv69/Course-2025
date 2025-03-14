package Apps;

import java.io.File;

public class ListDir {

  public static void main(String[] args) {
    File dir = new File("C:\\Users\\Mañana\\Documents\\Course-2025");
    String[] files = dir.list();

    if (files == null) {
      System.out.println("No files in the directory");
      return;
    }

    for (String file : files) {
      System.out.println(file);
    }
  }

}
