package swing;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JFrame;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;

public class MenuDrop extends JFrame implements ActionListener {

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
    itemNew.addActionListener(this);

    itemOpen = new JMenuItem("Open");
    itemOpen.addActionListener(this);

    itemSave = new JMenuItem("Save");
    itemSave.addActionListener(this);

    itemExit = new JMenuItem("Exit");
    itemExit.addActionListener(this);

    itemCut = new JMenuItem("Cut");
    itemCut.addActionListener(this);

    itemCopy = new JMenuItem("Copy");
    itemCopy.addActionListener(this);

    itemPaste = new JMenuItem("Paste");
    itemPaste.addActionListener(this);

    itemAbout = new JMenuItem("About");
    itemAbout.addActionListener(this);

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

  @Override
  public void actionPerformed(ActionEvent e) {
    if (e.getSource() == itemNew) {
      System.out.println("New");
    } else if (e.getSource() == itemOpen) {
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
    }
  }

}
