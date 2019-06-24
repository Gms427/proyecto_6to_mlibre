<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
Partial Class Principal
    Inherits System.Windows.Forms.Form

    'Form reemplaza a Dispose para limpiar la lista de componentes.
    <System.Diagnostics.DebuggerNonUserCode()>
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Requerido por el Diseñador de Windows Forms
    Private components As System.ComponentModel.IContainer

    'NOTA: el Diseñador de Windows Forms necesita el siguiente procedimiento
    'Se puede modificar usando el Diseñador de Windows Forms.  
    'No lo modifique con el editor de código.
    <System.Diagnostics.DebuggerStepThrough()>
    Private Sub InitializeComponent()
        Me.btnLogin = New System.Windows.Forms.Button()
        Me.btnRegistrarme = New System.Windows.Forms.Button()
        Me.gbxProducto = New System.Windows.Forms.GroupBox()
        Me.Label3 = New System.Windows.Forms.Label()
        Me.Label2 = New System.Windows.Forms.Label()
        Me.lblDescripcion = New System.Windows.Forms.Label()
        Me.Label1 = New System.Windows.Forms.Label()
        Me.lblDenuncia = New System.Windows.Forms.Label()
        Me.lblPrecio = New System.Windows.Forms.Label()
        Me.titProducto = New System.Windows.Forms.Label()
        Me.PictureBox1 = New System.Windows.Forms.PictureBox()
        Me.btnSuspender = New System.Windows.Forms.Button()
        Me.btnBorrar = New System.Windows.Forms.Button()
        Me.gbxProducto.SuspendLayout()
        CType(Me.PictureBox1, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'btnLogin
        '
        Me.btnLogin.Location = New System.Drawing.Point(606, 12)
        Me.btnLogin.Name = "btnLogin"
        Me.btnLogin.Size = New System.Drawing.Size(88, 23)
        Me.btnLogin.TabIndex = 0
        Me.btnLogin.Text = "Iniciar sesión"
        Me.btnLogin.UseVisualStyleBackColor = True
        '
        'btnRegistrarme
        '
        Me.btnRegistrarme.Location = New System.Drawing.Point(700, 12)
        Me.btnRegistrarme.Name = "btnRegistrarme"
        Me.btnRegistrarme.Size = New System.Drawing.Size(88, 23)
        Me.btnRegistrarme.TabIndex = 1
        Me.btnRegistrarme.Text = "Registrarme"
        Me.btnRegistrarme.UseVisualStyleBackColor = True
        '
        'gbxProducto
        '
        Me.gbxProducto.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.gbxProducto.Controls.Add(Me.btnBorrar)
        Me.gbxProducto.Controls.Add(Me.btnSuspender)
        Me.gbxProducto.Controls.Add(Me.Label3)
        Me.gbxProducto.Controls.Add(Me.Label1)
        Me.gbxProducto.Controls.Add(Me.lblDenuncia)
        Me.gbxProducto.Controls.Add(Me.Label2)
        Me.gbxProducto.Controls.Add(Me.lblPrecio)
        Me.gbxProducto.Controls.Add(Me.lblDescripcion)
        Me.gbxProducto.Controls.Add(Me.titProducto)
        Me.gbxProducto.Controls.Add(Me.PictureBox1)
        Me.gbxProducto.Location = New System.Drawing.Point(145, 104)
        Me.gbxProducto.Name = "gbxProducto"
        Me.gbxProducto.Size = New System.Drawing.Size(524, 173)
        Me.gbxProducto.TabIndex = 2
        Me.gbxProducto.TabStop = False
        Me.gbxProducto.Text = "Producto"
        '
        'Label3
        '
        Me.Label3.AutoSize = True
        Me.Label3.Location = New System.Drawing.Point(166, 142)
        Me.Label3.Name = "Label3"
        Me.Label3.Size = New System.Drawing.Size(348, 13)
        Me.Label3.TabIndex = 7
        Me.Label3.Text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        '
        'Label2
        '
        Me.Label2.AutoSize = True
        Me.Label2.Location = New System.Drawing.Point(166, 129)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(348, 13)
        Me.Label2.TabIndex = 6
        Me.Label2.Text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        '
        'lblDescripcion
        '
        Me.lblDescripcion.AutoSize = True
        Me.lblDescripcion.Location = New System.Drawing.Point(166, 116)
        Me.lblDescripcion.Name = "lblDescripcion"
        Me.lblDescripcion.Size = New System.Drawing.Size(348, 13)
        Me.lblDescripcion.TabIndex = 5
        Me.lblDescripcion.Text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Font = New System.Drawing.Font("Microsoft Sans Serif", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label1.Location = New System.Drawing.Point(165, 93)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(92, 20)
        Me.Label1.TabIndex = 4
        Me.Label1.Text = "Descripción"
        Me.Label1.TextAlign = System.Drawing.ContentAlignment.MiddleLeft
        '
        'lblDenuncia
        '
        Me.lblDenuncia.AutoSize = True
        Me.lblDenuncia.ForeColor = System.Drawing.Color.Red
        Me.lblDenuncia.Location = New System.Drawing.Point(172, 70)
        Me.lblDenuncia.Name = "lblDenuncia"
        Me.lblDenuncia.Size = New System.Drawing.Size(128, 13)
        Me.lblDenuncia.TabIndex = 3
        Me.lblDenuncia.Text = "Cantidad de denuncias: 2"
        '
        'lblPrecio
        '
        Me.lblPrecio.AutoSize = True
        Me.lblPrecio.Font = New System.Drawing.Font("Microsoft Sans Serif", 11.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblPrecio.ForeColor = System.Drawing.Color.Green
        Me.lblPrecio.Location = New System.Drawing.Point(169, 48)
        Me.lblPrecio.Name = "lblPrecio"
        Me.lblPrecio.Size = New System.Drawing.Size(53, 18)
        Me.lblPrecio.TabIndex = 2
        Me.lblPrecio.Text = "$1599"
        '
        'titProducto
        '
        Me.titProducto.AutoSize = True
        Me.titProducto.Font = New System.Drawing.Font("Microsoft Sans Serif", 14.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.titProducto.Location = New System.Drawing.Point(165, 20)
        Me.titProducto.Name = "titProducto"
        Me.titProducto.Size = New System.Drawing.Size(203, 24)
        Me.titProducto.TabIndex = 1
        Me.titProducto.Text = "Championes Adidas "
        Me.titProducto.TextAlign = System.Drawing.ContentAlignment.MiddleLeft
        '
        'PictureBox1
        '
        Me.PictureBox1.Location = New System.Drawing.Point(7, 20)
        Me.PictureBox1.Name = "PictureBox1"
        Me.PictureBox1.Size = New System.Drawing.Size(152, 147)
        Me.PictureBox1.TabIndex = 0
        Me.PictureBox1.TabStop = False
        '
        'btnSuspender
        '
        Me.btnSuspender.Location = New System.Drawing.Point(462, 19)
        Me.btnSuspender.Name = "btnSuspender"
        Me.btnSuspender.Size = New System.Drawing.Size(25, 23)
        Me.btnSuspender.TabIndex = 9
        Me.btnSuspender.Text = "Suspender"
        Me.btnSuspender.UseVisualStyleBackColor = True
        '
        'btnBorrar
        '
        Me.btnBorrar.Location = New System.Drawing.Point(493, 19)
        Me.btnBorrar.Name = "btnBorrar"
        Me.btnBorrar.Size = New System.Drawing.Size(25, 23)
        Me.btnBorrar.TabIndex = 10
        Me.btnBorrar.Text = "Borrar"
        Me.btnBorrar.UseVisualStyleBackColor = True
        '
        'Principal
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackColor = System.Drawing.SystemColors.ButtonFace
        Me.ClientSize = New System.Drawing.Size(800, 450)
        Me.Controls.Add(Me.gbxProducto)
        Me.Controls.Add(Me.btnRegistrarme)
        Me.Controls.Add(Me.btnLogin)
        Me.Name = "Principal"
        Me.Text = "Principal"
        Me.gbxProducto.ResumeLayout(False)
        Me.gbxProducto.PerformLayout()
        CType(Me.PictureBox1, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)

    End Sub

    Friend WithEvents btnLogin As Button
    Friend WithEvents btnRegistrarme As Button
    Friend WithEvents gbxProducto As GroupBox
    Friend WithEvents titProducto As Label
    Friend WithEvents PictureBox1 As PictureBox
    Friend WithEvents lblDescripcion As Label
    Friend WithEvents Label1 As Label
    Friend WithEvents lblDenuncia As Label
    Friend WithEvents lblPrecio As Label
    Friend WithEvents Label3 As Label
    Friend WithEvents Label2 As Label
    Friend WithEvents btnBorrar As Button
    Friend WithEvents btnSuspender As Button
End Class
