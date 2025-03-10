package switchCase;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;

public class NumberTranslateInput extends JFrame implements ActionListener {

  private JLabel lblNumber, lblResult;
  private JTextField txtNumber;
  private JButton btnTranslate;

  public NumberTranslateInput() {
    setLayout(null);

    lblNumber = new JLabel("Number: between 1 to 9");
    lblNumber.setBounds(10, 10, 150, 30);
    add(lblNumber);

    txtNumber = new JTextField();
    txtNumber.setBounds(150, 10, 100, 30);
    add(txtNumber);

    btnTranslate = new JButton("Translate");
    btnTranslate.setBounds(10, 50, 100, 30);
    btnTranslate.addActionListener(this);
    add(btnTranslate);

    lblResult = new JLabel();
    lblResult.setBounds(10, 90, 200, 30);
    add(lblResult);
  }

  public static void main(String[] args) {
    NumberTranslateInput frame = new NumberTranslateInput();
    frame.setTitle("Number Translate");
    frame.setSize(300, 200);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }

  @Override
  public void actionPerformed(ActionEvent e) {
    if (e.getSource() == btnTranslate) {

      if (txtNumber.getText().isEmpty()) {
        lblResult.setText("Please enter a number.");
        return;
      }

      int number = Integer.parseInt(txtNumber.getText());
      String result = "";

      switch (number) {
        case 1:
          result = "One";
          break;
        case 2:
          result = "Two";
          break;
        case 3:
          result = "Three";
          break;
        case 4:
          result = "Four";
          break;
        case 5:
          result = "Five";
          break;
        case 6:
          result = "Six";
          break;
        case 7:
          result = "Seven";
          break;
        case 8:
          result = "Eight";
          break;
        case 9:
          result = "Nine";
          break;
        default:
          result = "Invalid number, please enter a number between 1 to 9.";
          break;
      }

      lblResult.setText(result);
    }
  }

}
