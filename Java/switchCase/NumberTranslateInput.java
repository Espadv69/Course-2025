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
