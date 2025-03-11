package JTextField;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JTextField;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class JTextOperation extends JFrame implements ActionListener {

  private JTextField textField1, textField2, equaField;
  private JButton btnSum, btnSub;

  public JTextOperation() {
    JFrame frame = new JFrame("JTextOperation");
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setSize(400, 400);
    frame.setLayout(null);

    textField1 = new JTextField("0");
    textField1.setBounds(10, 20, 200, 30);
    frame.add(textField1);

    textField2 = new JTextField("0");
    textField2.setBounds(10, 60, 200, 30);
    frame.add(textField2);

    equaField = new JTextField();
    equaField.setBounds(10, 100, 200, 30);
    equaField.setEditable(false);
    frame.add(equaField);

    btnSum = new JButton("Sum");
    btnSum.setBounds(10, 140, 100, 30);
    btnSum.addActionListener(this);
    frame.add(btnSum);

    btnSub = new JButton("Sub");
    btnSub.setBounds(10, 180, 100, 30);
    btnSub.addActionListener(this);
    frame.add(btnSub);

    frame.setVisible(true);
  }

  public static void main(String[] args) {
    new JTextOperation();
  }

  @Override
  public void actionPerformed(ActionEvent e) {
    if (e.getSource() == btnSum) {
      if (textField1.getText().isEmpty() || textField2.getText().isEmpty()) {
        equaField.setText("Please enter a number");
        return;
      }

      int num1 = Integer.parseInt(textField1.getText());
      int num2 = Integer.parseInt(textField2.getText());
      int sum = num1 + num2;
      equaField.setText(String.valueOf(sum));
    } else if (e.getSource() == btnSub) {
      if (textField1.getText().isEmpty() || textField2.getText().isEmpty()) {
        equaField.setText("Please enter a number");
        return;
      }

      int num1 = Integer.parseInt(textField1.getText());
      int num2 = Integer.parseInt(textField2.getText());
      int sub = num1 - num2;
      equaField.setText(String.valueOf(sub));
    }
  }

}
