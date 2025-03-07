package swing;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;

public class TitleButton extends JFrame implements ActionListener {

  private JButton btn1, btn2, btn3;

  public TitleButton() {
    setLayout(null);

    btn1 = new JButton("Button 1");
    btn1.setBounds(10, 10, 100, 30);
    btn1.addActionListener(this);
    add(btn1);

    btn2 = new JButton("Button 2");
    btn2.setBounds(10, 50, 100, 30);
    btn2.addActionListener(this);
    add(btn2);

    btn3 = new JButton("Button 3");
    btn3.setBounds(10, 90, 100, 30);
    btn3.addActionListener(this);
    add(btn3);
  }

  public static void main(String[] args) {
    TitleButton form = new TitleButton();
    form.setBounds(10, 10, 200, 200);
    form.setVisible(true);
    form.setDefaultCloseOperation(EXIT_ON_CLOSE);
    form.setTitle("Title Button");
  }

  @Override
  public void actionPerformed(ActionEvent e) {
    if (e.getSource() == btn1) {
      setTitle("Button 1");
    } else if (e.getSource() == btn2) {
      setTitle("Button 2");
    } else if (e.getSource() == btn3) {
      setTitle("Button 3");
    }
  }

}
