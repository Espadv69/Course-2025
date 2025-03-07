package swing;

public class PracticaForm extends javax.swing.JFrame {

  public PracticaForm() {
    setLayout(null);
  }

  public static void main(String[] args) {
    PracticaForm form = new PracticaForm();
    form.setBounds(10, 10, 400, 300);
    form.setVisible(true);
    form.setDefaultCloseOperation(EXIT_ON_CLOSE);
  }

}
