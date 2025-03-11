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

    menuBar = new JMenuBar();
    form.setJMenuBar(menuBar);

    menuFile = new JMenu("File");
    menuEdit = new JMenu("Edit");
    menuHelp = new JMenu("Help");

    menuBar.add(menuFile);
    menuBar.add(menuEdit);
    menuBar.add(menuHelp);

    itemNew = new JMenuItem("New");
    itemOpen = new JMenuItem("Open");
    itemSave = new JMenuItem("Save");
    itemExit = new JMenuItem("Exit");

    itemCut = new JMenuItem("Cut");
    itemCopy = new JMenuItem("Copy");
    itemPaste = new JMenuItem("Paste");

    itemAbout = new JMenuItem("About");

    menuFile.add(itemNew);
    menuFile.add(itemOpen);
    menuFile.add(itemSave);
    menuFile.add(itemExit);

    menuEdit.add(itemCut);
    menuEdit.add(itemCopy);
    menuEdit.add(itemPaste);

    menuHelp.add(itemAbout);

    form.setVisible(true);
  }

  public static void main(String[] args) {
    new MenuDrop();
  }

}
