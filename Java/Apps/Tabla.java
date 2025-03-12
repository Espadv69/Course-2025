package Apps;

import javax.swing.JFrame;

public class Tabla extends JFrame {

  public JFrame frame;

  public Tabla() {
    frame = new JFrame("Tabla");
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setSize(400, 300);

    frame.setVisible(true);
  }

  public static void main(String[] args) {
    new Tabla();
  }

}
