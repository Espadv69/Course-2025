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

    lblName = new JLabel("Nombre:");
    lblName.setBounds(10, 10, 80, 30);
    add(lblName);

    txtName = new JTextField();
    txtName.setBounds(70, 10, 200, 30);
    add(txtName);

    btnSubmit = new JButton("Enviar");
    btnSubmit.setBounds(10, 50, 100, 30);
    btnSubmit.addActionListener(this);
    add(btnSubmit);

    btnReset = new JButton("Limpiar");
    btnReset.setBounds(120, 50, 100, 30);
    btnReset.addActionListener(this);
    add(btnReset);
  }

  public static void main(String[] args) {
    FormButtons form = new FormButtons();
    form.setBounds(20, 20, 500, 300);
    form.setDefaultCloseOperation(EXIT_ON_CLOSE);
    form.setVisible(true);
    form.setTitle("Formulario con Botones");
  }

  @Override
  public void actionPerformed(ActionEvent e) {
    try {
      if (e.getSource() == btnSubmit) {
        if (txtName.getText().isEmpty()) {
          System.out.println("El campo nombre es requerido");
          return;
        }

        String title = "Formulario con Botones de: " + txtName.getText();
        setTitle(title);

        System.out.println("Nombre: " + txtName.getText());
      } else if (e.getSource() == btnReset) {
        txtName.setText("");
        setTitle("Formulario con Botones");
      }
    } catch (Exception ex) {
      ex.printStackTrace();
    }
  }

}
