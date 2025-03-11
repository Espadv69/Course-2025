package swing;

import javax.swing.JFrame;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;

public class MenuDrop extends JFrame {

  private JMenuBar menuBar;
  private JMenu menuFile, menuEdit, menuHelp;

  private JMenuItem itemNew, itemOpen, itemSave, itemExit;
  private JMenuItem itemCut, itemCopy, itemPaste;
  private JMenuItem itemAbout;

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
