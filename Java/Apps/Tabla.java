package Apps;

import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.table.DefaultTableModel;

public class Tabla extends JFrame {

  public JFrame frame;
  public DefaultTableModel model;
  public JScrollPane sp;

  public Tabla() {
    frame = new JFrame("Tabla");
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setSize(400, 300);

    sp = new JScrollPane();
    sp.setBounds(10, 10, 375, 250);

    model = new DefaultTableModel();
    model.addColumn("Nombre");
    model.addColumn("Edad");
    model.addColumn("Sexo");

    JTable table = new JTable(model);
    sp.setViewportView(table);
    frame.add(sp);

    model.addRow(new Object[] { "Juan", 25, "M" });
    model.addRow(new Object[] { "Maria", 22, "F" });

    frame.setVisible(true);
  }

  public static void main(String[] args) {
    new Tabla();
  }

}
