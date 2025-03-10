package swing;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class PracticeButton extends JFrame {

  private JButton button;
  private JLabel text;

  public PracticeButton() {
    setLayout(null);
  
    button = new JButton("Click me!");
    button.setBounds(100, 100, 100, 50);
    add(button);
  }

  public static void main(String[] args) {
    PracticeButton frame = new PracticeButton();
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setSize(300, 300);
    frame.setVisible(true);
  }

}
