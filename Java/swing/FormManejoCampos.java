package swing;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JComboBox;
import javax.swing.JFrame;

public class FormManejoCampos extends JFrame implements ActionListener {

  private JComboBox<String> combo;

  public FormManejoCampos() {
    setLayout(null);

    combo = new JComboBox<String>();
    combo.setBounds(10, 10, 80, 20);
    add(combo);
  }

  public static void main(String[] args) {
    FormManejoCampos form = new FormManejoCampos();
    form.setBounds(0, 0, 200, 150);
    form.setVisible(true);
    form.setDefaultCloseOperation(EXIT_ON_CLOSE);
    form.setTitle("Manejo de Campos");
  }

  @Override
  public void actionPerformed(ActionEvent e) {
    try {

    } catch (Exception err) {
      err.printStackTrace();
    }
  }

}
