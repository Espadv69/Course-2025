package Apps;

import java.io.File;

public class DeleteDir {

  public static void main(String[] args) {
    File dir = new File("C:\\Users\\Mañana\\Documents\\Course-2025\\aaa");

    if (dir.exists()) {
      System.out.println("Deleting " + dir);
      dir.delete();
    } else {
      System.out.println("Directory does not exist");
    }
  }

}
