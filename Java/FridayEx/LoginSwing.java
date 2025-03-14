package FridayEx;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;

public class LoginSwing extends JFrame {

  private JLabel userLabel, passLabel;
  private JTextField userField, passField;
  private JButton loginButton;

  public LoginSwing() {
    JFrame frame = new JFrame("Login Form");
    frame.setSize(300, 200);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

    frame.setVisible(true);
  }

  public static void main(String[] args) {
    new LoginSwing();
  }

}
