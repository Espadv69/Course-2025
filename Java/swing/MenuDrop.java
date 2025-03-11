package swing;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JFrame;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;

public class MenuDrop extends JFrame implements ActionListener {

  private JMenuBar menuBar;
  private JMenu menuFile, menuFolder, menuFolderProyect, menuEdit, menuHelp;

  private JMenuItem itemOpen, itemSave, itemExit;
  private JMenuItem itemJava, itemC, itemPython;
  private JMenuItem itemFolder, itemFile;
  private JMenuItem itemCut, itemCopy, itemPaste;
  private JMenuItem itemAbout;

  public MenuDrop() {
    JFrame form = new JFrame("Menu Drop");
    form.setSize(300, 200);
    form.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

    // Create menu bar
    menuBar = new JMenuBar();
    form.setJMenuBar(menuBar);

    // Create menus
    menuFile = new JMenu("File");
    menuFolder = new JMenu("Folder");
    menuFolderProyect = new JMenu("Folder Proyect");
    menuEdit = new JMenu("Edit");
    menuHelp = new JMenu("Help");

    // Add menus to menu bar
    menuBar.add(menuFile);
    menuBar.add(menuEdit);
    menuBar.add(menuHelp);

    // Add menu to menu
    menuFile.add(menuFolder);
    menuFolder.add(menuFolderProyect);

    // Create menu items
    itemOpen = new JMenuItem("Open");
    itemOpen.addActionListener(this);

    itemSave = new JMenuItem("Save");
    itemSave.addActionListener(this);

    itemExit = new JMenuItem("Exit");
    itemExit.addActionListener(this);

    itemJava = new JMenuItem("Java");
    itemJava.addActionListener(this);

    itemC = new JMenuItem("C");
    itemC.addActionListener(this);

    itemPython = new JMenuItem("Python");
    itemPython.addActionListener(this);

    itemFolder = new JMenuItem("Folder");
    itemFolder.addActionListener(this);

    itemFile = new JMenuItem("File");
    itemFile.addActionListener(this);

    itemCut = new JMenuItem("Cut");
    itemCut.addActionListener(this);

    itemCopy = new JMenuItem("Copy");
    itemCopy.addActionListener(this);

    itemPaste = new JMenuItem("Paste");
    itemPaste.addActionListener(this);

    itemAbout = new JMenuItem("About");
    itemAbout.addActionListener(this);

    // Add menu items to menu
    menuFile.add(itemOpen);
    menuFile.add(itemSave);
    menuFile.add(itemExit);

    menuFolder.add(itemJava);
    menuFolder.add(itemC);
    menuFolder.add(itemPython);

    menuFolderProyect.add(itemFolder);
    menuFolderProyect.add(itemFile);

    menuEdit.add(itemCut);
    menuEdit.add(itemCopy);
    menuEdit.add(itemPaste);

    menuHelp.add(itemAbout);

    form.setVisible(true);
  }

  public static void main(String[] args) {
    new MenuDrop();
  }

  @Override
  public void actionPerformed(ActionEvent e) {
    if (e.getSource() == itemOpen) {
      System.out.println("Open");
    } else if (e.getSource() == itemSave) {
      System.out.println("Save");
    } else if (e.getSource() == itemExit) {
      System.out.println("Exit");
    } else if (e.getSource() == itemCut) {
      System.out.println("Cut");
    } else if (e.getSource() == itemCopy) {
      System.out.println("Copy");
    } else if (e.getSource() == itemPaste) {
      System.out.println("Paste");
    } else if (e.getSource() == itemAbout) {
      System.out.println("About");
    } else if (e.getSource() == itemFolder) {
      System.out.println("Folder");
    } else if (e.getSource() == itemFile) {
      System.out.println("File");
    } else if (e.getSource() == itemJava) {
      System.out.println("Java");
    } else if (e.getSource() == itemC) {
      System.out.println("C");
    } else if (e.getSource() == itemPython) {
      System.out.println("Python");
    }
  }

}
