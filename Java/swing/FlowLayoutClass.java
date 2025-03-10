package swing;

import java.awt.FlowLayout;

import javax.swing.JFrame;

public class FlowLayoutClass {

  private JFrame frame;

  public FlowLayoutClass() {
    frame = new JFrame();
    frame.setLayout(new FlowLayout());
    frame.setSize(300, 300);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }

  public static void main(String[] args) {
    new FlowLayoutClass();
  }

}
