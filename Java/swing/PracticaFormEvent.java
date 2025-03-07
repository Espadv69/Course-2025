package swing;

import javax.swing.JButton;

public class PracticaFormEvent extends javax.swing.JFrame {

  private JButton btnAceptar, btnCancelar;

  public PracticaFormEvent() {
    setLayout(null);

    btnAceptar = new JButton("Aceptar");
    btnAceptar.setBounds(10, 10, 100, 30);
    add(btnAceptar);

    btnCancelar = new JButton("Cancelar");
    btnCancelar.setBounds(120, 10, 100, 30);
    add(btnCancelar);
  }

  public static void main(String[] args) {
    PracticaFormEvent form = new PracticaFormEvent();
    form.setBounds(10, 10, 400,300);
    form.setVisible(true);
    form.setDefaultCloseOperation(EXIT_ON_CLOSE);
    form.setTitle("Practica Formulario Eventos");
  }

}
