package swing;

import javax.swing.JFrame;

public class MenuDrop extends JFrame {

  public MenuDrop() {
    JFrame form = new JFrame("Menu Drop");
    form.setSize(300, 200);
    form.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

    form.setVisible(true);
  }

  public static void main(String[] args) {
    new MenuDrop();
  }

}
