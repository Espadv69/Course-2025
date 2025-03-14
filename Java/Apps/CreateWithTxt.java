package Apps;

import java.nio.file.Files;
import java.nio.file.Paths;

public class CreateWithTxt {

  public static void main(String[] args) {
    String path = "C:\\Users\\Mañana\\Documents\\Course-2025\\Java\\Apps\\test.md";
    String content = "## Hello World!\nThis is a test file.\n";

    try {
      if (Files.exists(Paths.get(path))) {
        System.out.println("File already exists.");
        System.exit(0);
      }
      
      Files.write(Paths.get(path), content.getBytes());
      System.out.println("File created successfully.");
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

}
