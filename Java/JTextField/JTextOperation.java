package JTextField;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JTextField;

public class JTextOperation extends JFrame {

  private JTextField textField1, textField2;
  private JButton btnSum, btnSub;

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
