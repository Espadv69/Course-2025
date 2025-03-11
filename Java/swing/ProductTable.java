package swing;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.table.DefaultTableModel;

public class ProductTable extends JFrame implements ActionListener {

  String[] column = { "Product ID", "Product Name", "Product Price", "Product Quantity" };
  String[][] data = {
      { "1", "A", "100", "10" },
      { "2", "B", "200", "20" },
      { "3", "C", "300", "30" },
      { "4", "D", "400", "40" },
      { "5", "E", "500", "50" },
      { "6", "F", "600", "60" },
      { "7", "G", "700", "70" },
      { "8", "H", "800", "80" },
      { "9", "I", "900", "90" },
      { "10", "J", "1000", "100" }
  };

  private DefaultTableModel model;
  private JScrollPane scrollBar;

  public boolean isCellEditable(int row, int column) {
    return false;
  }

  public ProductTable() {
    JFrame frame = new JFrame("Product Table");
    frame.setSize(500, 200);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

    model = new DefaultTableModel(data, column);
    JTable table = new JTable(model);

    scrollBar = new JScrollPane(table);
    frame.add(scrollBar);
    
    frame.setVisible(true);
  }

  public static void main(String[] args) {
    new ProductTable();
  }

  @Override
  public void actionPerformed(ActionEvent e) {

  }

}
