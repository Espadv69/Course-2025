package swing;

import javax.swing.JLabel;

public class PracticaFormConstructor extends javax.swing.JFrame {

  private JLabel lblTitulo, lblVersion;

  public PracticaFormConstructor() {
    setLayout(null);

    lblTitulo = new JLabel("Sistema de Facturación");
    lblTitulo.setBounds(10, 10, 200, 30);
    add(lblTitulo);

    lblVersion = new JLabel("Java Version: 23.0.2");
    lblVersion.setBounds(10, 40, 200, 30);
    add(lblVersion);
  }

  public static void main(String[] args) {
    PracticaFormConstructor form = new PracticaFormConstructor();
    form.setBounds(10, 10, 400, 300);
    form.setVisible(true);
    form.setDefaultCloseOperation(EXIT_ON_CLOSE);
    form.setTitle("Practica Formulario");
  }

}
