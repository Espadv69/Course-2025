package loops;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;

public class PasswordLoop extends JFrame implements ActionListener {

  private JLabel userLabel, passLabel;
  private JTextField userField, passField;
  private JButton loginButton;

  public PasswordLoop() {
    setLayout(null);

    userLabel = new JLabel("Username");
    userLabel.setBounds(10, 20, 80, 25);
    add(userLabel);

    userField = new JTextField();
    userField.setBounds(100, 20, 165, 25);
    add(userField);

    passLabel = new JLabel("Password");
    passLabel.setBounds(10, 50, 80, 25);
    add(passLabel);

    passField = new JTextField();
    passField.setBounds(100, 50, 165, 25);
    add(passField);

    loginButton = new JButton("Login");
    loginButton.setBounds(10, 80, 80, 25);
    loginButton.addActionListener(this);
    add(loginButton);
  }

  public static void main(String[] args) {
    PasswordLoop frame = new PasswordLoop();
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setSize(400, 400);
    frame.setVisible(true);
  }

  @Override
  public void actionPerformed(ActionEvent e) {
    if (e.getSource() == loginButton) {
      while (true) {
        if (userField.getText().equals("admin") && passField.getText().equals("1234")) {
          System.out.println("Login successful");
          userField.setText("");
          passField.setText("");
          break;
        } else {
          System.out.println("Login failed");
          break;
        }
      }
    }
  }

}
