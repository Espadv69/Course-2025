package Apps;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class CreateFile {

  public static void main(String[] args) {
    File file = new File("C:\\Users\\Public\\test.txt");

    if (file.exists()) {
      System.out.println("File already exists.");
      System.exit(0);
    }

    System.out.println("If you see this message, the file does not exist and will be created.");

    try (FileWriter writer = new FileWriter(file)) {
      System.out.println("File created successfully.");
      writer.write("Hello World!");
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

}
