package swing;

import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;

import javax.swing.JComboBox;
import javax.swing.JFrame;

public class FormManejoCampos extends JFrame implements ItemListener {

  private JComboBox<String> comboColores;

  public FormManejoCampos() {
    setLayout(null);

    comboColores = new JComboBox<String>();
    comboColores.setBounds(0, 0, 200, 25);

    comboColores.addItem("Seleccione un color");
    comboColores.addItem("Rojo");
    comboColores.addItem("Verde");
    comboColores.addItem("Azul");
    comboColores.addItem("Amarillo");
    add(comboColores);

    comboColores.addItemListener(this);
  }

  public static void main(String[] args) {
    FormManejoCampos form = new FormManejoCampos();
    form.setBounds(0, 0, 300, 300);
    form.setVisible(true);
    form.setDefaultCloseOperation(EXIT_ON_CLOSE);
    form.setTitle("Manejo de Campos");
  }

  @Override
  public void itemStateChanged(ItemEvent e) {
    try {
      if (e.getSource() == comboColores) {
        if (comboColores.getSelectedIndex() == 0) {
          setTitle("Manejo de Campos");
        } else {
          setTitle("Color seleccionado: " + comboColores.getSelectedItem());
        }
      }

    } catch (Exception exception) {
      exception.printStackTrace();
    }
  }

}
