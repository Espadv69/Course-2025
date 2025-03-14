package FridayEx;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;

public class LoginSwing extends JFrame {

  public JLabel userLabel, passLabel;
  public JTextField userField, passField;

  public LoginSwing() {
    JFrame frame = new JFrame("Login Form");

    userLabel = new JLabel("Username");
    userLabel.setBounds(10, 10, 80, 25);
    frame.add(userLabel);

    userField = new JTextField();
    userField.setBounds(100, 10, 160, 25);
    frame.add(userField);

    passLabel = new JLabel("Password");
    passLabel.setBounds(10, 40, 80, 25);
    frame.add(passLabel);

    passField = new JTextField();
    passField.setBounds(100, 40, 160, 25);
    frame.add(passField);

    frame.setLayout(null);
    frame.setBounds(100, 100, 300, 150);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }

  public static void main(String[] args) {
    new LoginSwing();
  }

}
