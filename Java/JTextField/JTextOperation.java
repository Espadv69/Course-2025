package JTextField;

import javax.swing.JFrame;

public class JTextOperation extends JFrame {

  public JTextOperation() {
    JFrame frame = new JFrame("JTextOperation");
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setSize(400, 400);
    frame.setLayout(null);

    frame.setVisible(true);
  }

  public static void main(String[] args) {
    new JTextOperation();
  }

}
