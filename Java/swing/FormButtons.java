package swing;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;

public class FormButtons extends JFrame implements ActionListener {

  private JLabel lblName;
  private JTextField txtName;
  private JButton btnSubmit, btnReset;

  public FormButtons() {
    setLayout(null);
  }

  public static void main(String[] args) {
    FormButtons form = new FormButtons();
    form.setSize(300, 200);
    form.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    form.setVisible(true);
    form.setTitle("Formulario con Botones");
  }

  @Override
  public void actionPerformed(ActionEvent e) {
    try {

    } catch (Exception ex) {
      ex.printStackTrace();
    }
  }

}
