package JTextField;

import javax.swing.JFrame;
import javax.swing.JTextField;

public class JTextFieldTutorial extends JFrame {

  private JTextField textField1, textField2;

  public JTextFieldTutorial() {
    JFrame frame = new JFrame("JTextField Tutorial");
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setSize(400, 400);
    frame.setLayout(null);
    frame.setVisible(true);

    textField1 = new JTextField("Welcome home");
    textField1.setBounds(10, 20, 200, 30);

    textField2 = new JTextField("Welcome to Java");
    textField2.setBounds(10, 100, 200, 30);

    frame.add(textField1);
    frame.add(textField2);
  }

  public static void main(String[] args) {
    new JTextFieldTutorial();
  }

}
