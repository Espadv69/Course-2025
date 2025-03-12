package Apps;

import javax.swing.JFrame;
import javax.swing.JTable;
import javax.swing.table.DefaultTableModel;

public class Tabla extends JFrame {

  public JFrame frame;
  public DefaultTableModel model;

  public Tabla() {
    frame = new JFrame("Tabla");
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setSize(400, 300);

    model = new DefaultTableModel();
    model.addColumn("Nombre");
    model.addColumn("Edad");
    model.addColumn("Sexo");
    model.addColumn("Pais");

    model.addRow(new Object[] { "Juan", 25, "M", "Mexico" });
    model.addRow(new Object[] { "Maria", 22, "F", "Mexico" });

    frame.add(new JTable(model));

    frame.setVisible(true);
  }

  public static void main(String[] args) {
    new Tabla();
  }

}
