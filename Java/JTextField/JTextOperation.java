package JTextField;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JTextField;

public class JTextOperation extends JFrame {

  private JTextField textField1, textField2, equaField;
  private JButton btnSum, btnSub;

  public JTextOperation() {
    JFrame frame = new JFrame("JTextOperation");
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setSize(400, 400);
    frame.setLayout(null);

    textField1 = new JTextField("Enter a number");
    textField1.setBounds(10, 20, 100, 30);
    frame.add(textField1);

    textField2 = new JTextField("Enter a number");
    textField2.setBounds(10, 60, 100, 30);
    frame.add(textField2);

    equaField = new JTextField("Result");
    equaField.setBounds(10, 100, 100, 30);
    equaField.setEditable(false);
    frame.add(equaField);

    btnSum = new JButton("Sum");
    btnSum.setBounds(10, 140, 100, 30);
    frame.add(btnSum);

    btnSub = new JButton("Sub");
    btnSub.setBounds(10, 180, 100, 30);
    frame.add(btnSub);

    frame.setVisible(true);
  }

  public static void main(String[] args) {
    new JTextOperation();
  }

}
