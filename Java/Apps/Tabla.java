package Apps;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

public class Tabla extends JFrame {

  private JPanel panel;
  private JLabel lblNombre, lblEdad, lblSexo;
  private JTextField txtNombre, txtEdad, txtSexo;
  private JButton btnAgregar, btnEliminar, btnAgregarPanel;

  private JFrame frame;
  private DefaultTableModel model;
  private JScrollPane sp;

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

    model.addRow(new Object[] { "Juan", 25, "M" });
    model.addRow(new Object[] { "Maria", 22, "F" });

    panel = new JPanel();
    panel.setLayout(null);

    lblNombre = new JLabel("Nombre");
    lblNombre.setBounds(10, 10, 100, 20);
    panel.add(lblNombre);
    txtNombre = new JTextField();
    txtNombre.setBounds(10, 10, 100, 20);
    panel.add(txtNombre);

    lblEdad = new JLabel("Edad");
    lblEdad.setBounds(120, 10, 100, 20);
    panel.add(lblEdad);
    txtEdad = new JTextField();
    txtEdad.setBounds(120, 10, 100, 20);
    panel.add(txtEdad);

    lblSexo = new JLabel("Sexo");
    lblSexo.setBounds(230, 10, 100, 20);
    panel.add(lblSexo);
    txtSexo = new JTextField();
    txtSexo.setBounds(230, 10, 100, 20);
    panel.add(txtSexo);

    btnAgregarPanel = new JButton("Agregar");
    btnAgregarPanel.setBounds(10, 40, 100, 20);
    panel.add(btnAgregarPanel);

    btnAgregar = new JButton("Agregar");
    btnAgregar.setBounds(10, 200, 100, 20);
    frame.add(btnAgregar);

    btnEliminar = new JButton("Eliminar");
    btnEliminar.setBounds(120, 200, 100, 20);
    frame.add(btnEliminar);

    JTable table = new JTable(model);
    sp.setViewportView(table);
    frame.add(sp);

    frame.setVisible(true);
  }

  public static void main(String[] args) {
    new Tabla();
  }

}
