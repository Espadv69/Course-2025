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

  }

}
