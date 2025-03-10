package swing;

import java.awt.FlowLayout;

import javax.swing.JFrame;

public class FlowLayoutClass {

  private JFrame frame;

  public FlowLayoutClass() {
    frame = new JFrame();
    frame.setLayout(new FlowLayout());
  }

  public static void main(String[] args) {
    FlowLayoutClass flowLayout = new FlowLayoutClass();
    flowLayout.frame.setSize(300, 300);
    flowLayout.frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    flowLayout.frame.setVisible(true);
  }

}
