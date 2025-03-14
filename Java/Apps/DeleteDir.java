package Apps;

import java.io.File;

public class DeleteDir {

  public static void main(String[] args) {
    File dir = new File("C:\\Users\\Mañana\\Documents\\Course-2025\\aaa");

    if (dir.exists()) {
      String[] entries = dir.list();

      if (entries.length == 0) {
        dir.delete();
        System.out.println("Directory is deleted : " + dir.getAbsolutePath());
      } else {
        System.out.println("Directory is not empty");
      }

    } else {
      System.out.println("Directory does not exist");
    }
  }

}
