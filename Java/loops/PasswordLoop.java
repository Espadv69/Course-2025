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
  }

  public static void main(String[] args) {
    PasswordLoop frame = new PasswordLoop();
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setSize(400, 60);
    frame.setVisible(true);
  }

  @Override
  public void actionPerformed(ActionEvent e) {

  }

}
