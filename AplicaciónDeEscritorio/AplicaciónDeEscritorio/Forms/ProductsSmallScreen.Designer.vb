<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
Partial Class ProductsSmallScreen
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
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(ProductsSmallScreen))
        Me.gbxProducto = New System.Windows.Forms.GroupBox()
        Me.Label5 = New System.Windows.Forms.Label()
        Me.Label1 = New System.Windows.Forms.Label()
        Me.Label4 = New System.Windows.Forms.Label()
        Me.Label3 = New System.Windows.Forms.Label()
        Me.titDescripcion = New System.Windows.Forms.Label()
        Me.btnIgnorar = New System.Windows.Forms.Button()
        Me.btnSuspender = New System.Windows.Forms.Button()
        Me.Label2 = New System.Windows.Forms.Label()
        Me.lblDenuncia = New System.Windows.Forms.Label()
        Me.lblDescripcion = New System.Windows.Forms.Label()
        Me.btnBorrar = New System.Windows.Forms.Button()
        Me.lblPrecio = New System.Windows.Forms.Label()
        Me.titProducto = New System.Windows.Forms.Label()
        Me.imgProducto = New System.Windows.Forms.PictureBox()
        Me.imgNosbey = New System.Windows.Forms.Button()
        Me.backgroundProducts = New System.Windows.Forms.Panel()
        Me.BackgroundWorker1 = New System.ComponentModel.BackgroundWorker()
        Me.btnCloseApp = New System.Windows.Forms.Button()
        Me.btnLogIn = New System.Windows.Forms.Button()
        Me.btnSignIn = New System.Windows.Forms.Button()
        Me.gbxProducto.SuspendLayout()
        CType(Me.imgProducto, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.backgroundProducts.SuspendLayout()
        Me.SuspendLayout()
        '
        'gbxProducto
        '
        Me.gbxProducto.BackColor = System.Drawing.SystemColors.ActiveBorder
        Me.gbxProducto.Controls.Add(Me.Label5)
        Me.gbxProducto.Controls.Add(Me.Label1)
        Me.gbxProducto.Controls.Add(Me.Label4)
        Me.gbxProducto.Controls.Add(Me.Label3)
        Me.gbxProducto.Controls.Add(Me.titDescripcion)
        Me.gbxProducto.Controls.Add(Me.btnIgnorar)
        Me.gbxProducto.Controls.Add(Me.btnSuspender)
        Me.gbxProducto.Controls.Add(Me.Label2)
        Me.gbxProducto.Controls.Add(Me.lblDenuncia)
        Me.gbxProducto.Controls.Add(Me.lblDescripcion)
        Me.gbxProducto.Controls.Add(Me.btnBorrar)
        Me.gbxProducto.Controls.Add(Me.lblPrecio)
        Me.gbxProducto.Controls.Add(Me.titProducto)
        Me.gbxProducto.Controls.Add(Me.imgProducto)
        Me.gbxProducto.Location = New System.Drawing.Point(316, 30)
        Me.gbxProducto.Name = "gbxProducto"
        Me.gbxProducto.Size = New System.Drawing.Size(691, 250)
        Me.gbxProducto.TabIndex = 2
        Me.gbxProducto.TabStop = False
        '
        'Label5
        '
        Me.Label5.AutoSize = True
        Me.Label5.Location = New System.Drawing.Point(315, 195)
        Me.Label5.Name = "Label5"
        Me.Label5.Size = New System.Drawing.Size(348, 13)
        Me.Label5.TabIndex = 14
        Me.Label5.Text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Location = New System.Drawing.Point(315, 181)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(348, 13)
        Me.Label1.TabIndex = 13
        Me.Label1.Text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        '
        'Label4
        '
        Me.Label4.AutoSize = True
        Me.Label4.Location = New System.Drawing.Point(315, 155)
        Me.Label4.Name = "Label4"
        Me.Label4.Size = New System.Drawing.Size(348, 13)
        Me.Label4.TabIndex = 12
        Me.Label4.Text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        '
        'Label3
        '
        Me.Label3.AutoSize = True
        Me.Label3.Location = New System.Drawing.Point(316, 140)
        Me.Label3.Name = "Label3"
        Me.Label3.Size = New System.Drawing.Size(348, 13)
        Me.Label3.TabIndex = 7
        Me.Label3.Text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        '
        'titDescripcion
        '
        Me.titDescripcion.AutoSize = True
        Me.titDescripcion.Font = New System.Drawing.Font("Microsoft Sans Serif", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.titDescripcion.Location = New System.Drawing.Point(314, 93)
        Me.titDescripcion.Name = "titDescripcion"
        Me.titDescripcion.Size = New System.Drawing.Size(92, 20)
        Me.titDescripcion.TabIndex = 4
        Me.titDescripcion.Text = "Descripción"
        Me.titDescripcion.TextAlign = System.Drawing.ContentAlignment.MiddleLeft
        '
        'btnIgnorar
        '
        Me.btnIgnorar.AccessibleName = "Ignorar"
        Me.btnIgnorar.BackColor = System.Drawing.Color.Transparent
        Me.btnIgnorar.BackgroundImage = CType(resources.GetObject("btnIgnorar.BackgroundImage"), System.Drawing.Image)
        Me.btnIgnorar.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnIgnorar.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnIgnorar.FlatAppearance.BorderColor = System.Drawing.SystemColors.ScrollBar
        Me.btnIgnorar.FlatAppearance.BorderSize = 0
        Me.btnIgnorar.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnIgnorar.Location = New System.Drawing.Point(619, 20)
        Me.btnIgnorar.Name = "btnIgnorar"
        Me.btnIgnorar.Size = New System.Drawing.Size(25, 32)
        Me.btnIgnorar.TabIndex = 11
        Me.btnIgnorar.UseVisualStyleBackColor = False
        '
        'btnSuspender
        '
        Me.btnSuspender.AccessibleName = ""
        Me.btnSuspender.BackColor = System.Drawing.Color.Transparent
        Me.btnSuspender.BackgroundImage = CType(resources.GetObject("btnSuspender.BackgroundImage"), System.Drawing.Image)
        Me.btnSuspender.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnSuspender.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnSuspender.FlatAppearance.BorderColor = System.Drawing.SystemColors.ScrollBar
        Me.btnSuspender.FlatAppearance.BorderSize = 0
        Me.btnSuspender.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnSuspender.Location = New System.Drawing.Point(584, 20)
        Me.btnSuspender.Name = "btnSuspender"
        Me.btnSuspender.Size = New System.Drawing.Size(33, 32)
        Me.btnSuspender.TabIndex = 9
        Me.btnSuspender.Tag = ""
        Me.btnSuspender.UseVisualStyleBackColor = False
        '
        'Label2
        '
        Me.Label2.AutoSize = True
        Me.Label2.Location = New System.Drawing.Point(316, 127)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(348, 13)
        Me.Label2.TabIndex = 6
        Me.Label2.Text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        '
        'lblDenuncia
        '
        Me.lblDenuncia.AutoSize = True
        Me.lblDenuncia.ForeColor = System.Drawing.Color.Red
        Me.lblDenuncia.Location = New System.Drawing.Point(315, 69)
        Me.lblDenuncia.Name = "lblDenuncia"
        Me.lblDenuncia.Size = New System.Drawing.Size(128, 13)
        Me.lblDenuncia.TabIndex = 3
        Me.lblDenuncia.Text = "Cantidad de denuncias: 2"
        '
        'lblDescripcion
        '
        Me.lblDescripcion.AutoSize = True
        Me.lblDescripcion.Location = New System.Drawing.Point(316, 114)
        Me.lblDescripcion.Name = "lblDescripcion"
        Me.lblDescripcion.Size = New System.Drawing.Size(348, 13)
        Me.lblDescripcion.TabIndex = 5
        Me.lblDescripcion.Text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        '
        'btnBorrar
        '
        Me.btnBorrar.AccessibleName = "Borrar"
        Me.btnBorrar.BackColor = System.Drawing.Color.Transparent
        Me.btnBorrar.BackgroundImage = CType(resources.GetObject("btnBorrar.BackgroundImage"), System.Drawing.Image)
        Me.btnBorrar.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnBorrar.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnBorrar.FlatAppearance.BorderColor = System.Drawing.SystemColors.ScrollBar
        Me.btnBorrar.FlatAppearance.BorderSize = 0
        Me.btnBorrar.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnBorrar.ForeColor = System.Drawing.Color.Transparent
        Me.btnBorrar.Location = New System.Drawing.Point(650, 20)
        Me.btnBorrar.Name = "btnBorrar"
        Me.btnBorrar.Size = New System.Drawing.Size(25, 32)
        Me.btnBorrar.TabIndex = 10
        Me.btnBorrar.UseVisualStyleBackColor = False
        '
        'lblPrecio
        '
        Me.lblPrecio.AutoSize = True
        Me.lblPrecio.Font = New System.Drawing.Font("Microsoft Sans Serif", 11.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblPrecio.ForeColor = System.Drawing.Color.Green
        Me.lblPrecio.Location = New System.Drawing.Point(315, 48)
        Me.lblPrecio.Name = "lblPrecio"
        Me.lblPrecio.Size = New System.Drawing.Size(53, 18)
        Me.lblPrecio.TabIndex = 2
        Me.lblPrecio.Text = "$2599"
        '
        'titProducto
        '
        Me.titProducto.AutoSize = True
        Me.titProducto.Font = New System.Drawing.Font("Microsoft Sans Serif", 14.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.titProducto.Location = New System.Drawing.Point(315, 20)
        Me.titProducto.Name = "titProducto"
        Me.titProducto.Size = New System.Drawing.Size(203, 24)
        Me.titProducto.TabIndex = 1
        Me.titProducto.Text = "Championes Adidas "
        Me.titProducto.TextAlign = System.Drawing.ContentAlignment.MiddleLeft
        '
        'imgProducto
        '
        Me.imgProducto.BackColor = System.Drawing.Color.Transparent
        Me.imgProducto.BackgroundImage = CType(resources.GetObject("imgProducto.BackgroundImage"), System.Drawing.Image)
        Me.imgProducto.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.imgProducto.Location = New System.Drawing.Point(7, 17)
        Me.imgProducto.Name = "imgProducto"
        Me.imgProducto.Size = New System.Drawing.Size(298, 223)
        Me.imgProducto.TabIndex = 0
        Me.imgProducto.TabStop = False
        '
        'imgNosbey
        '
        Me.imgNosbey.BackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.BackgroundImage = CType(resources.GetObject("imgNosbey.BackgroundImage"), System.Drawing.Image)
        Me.imgNosbey.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.imgNosbey.Enabled = False
        Me.imgNosbey.FlatAppearance.BorderColor = System.Drawing.Color.FromArgb(CType(CType(48, Byte), Integer), CType(CType(54, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.imgNosbey.FlatAppearance.MouseDownBackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.imgNosbey.Location = New System.Drawing.Point(510, 15)
        Me.imgNosbey.Name = "imgNosbey"
        Me.imgNosbey.Size = New System.Drawing.Size(303, 128)
        Me.imgNosbey.TabIndex = 3
        Me.imgNosbey.UseVisualStyleBackColor = False
        '
        'backgroundProducts
        '
        Me.backgroundProducts.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.backgroundProducts.Controls.Add(Me.gbxProducto)
        Me.backgroundProducts.Location = New System.Drawing.Point(-13, 160)
        Me.backgroundProducts.Name = "backgroundProducts"
        Me.backgroundProducts.Size = New System.Drawing.Size(1408, 800)
        Me.backgroundProducts.TabIndex = 4
        '
        'btnCloseApp
        '
        Me.btnCloseApp.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.btnCloseApp.BackgroundImage = CType(resources.GetObject("btnCloseApp.BackgroundImage"), System.Drawing.Image)
        Me.btnCloseApp.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnCloseApp.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnCloseApp.FlatAppearance.BorderSize = 0
        Me.btnCloseApp.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnCloseApp.Location = New System.Drawing.Point(1310, 15)
        Me.btnCloseApp.Name = "btnCloseApp"
        Me.btnCloseApp.Size = New System.Drawing.Size(42, 40)
        Me.btnCloseApp.TabIndex = 5
        Me.btnCloseApp.UseVisualStyleBackColor = False
        '
        'btnLogIn
        '
        Me.btnLogIn.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.btnLogIn.BackgroundImage = CType(resources.GetObject("btnLogIn.BackgroundImage"), System.Drawing.Image)
        Me.btnLogIn.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnLogIn.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnLogIn.FlatAppearance.BorderSize = 0
        Me.btnLogIn.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnLogIn.Location = New System.Drawing.Point(1275, 15)
        Me.btnLogIn.Name = "btnLogIn"
        Me.btnLogIn.Size = New System.Drawing.Size(35, 40)
        Me.btnLogIn.TabIndex = 6
        Me.btnLogIn.UseVisualStyleBackColor = False
        '
        'btnSignIn
        '
        Me.btnSignIn.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.btnSignIn.BackgroundImage = CType(resources.GetObject("btnSignIn.BackgroundImage"), System.Drawing.Image)
        Me.btnSignIn.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnSignIn.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnSignIn.FlatAppearance.BorderSize = 0
        Me.btnSignIn.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnSignIn.Location = New System.Drawing.Point(1240, 15)
        Me.btnSignIn.Name = "btnSignIn"
        Me.btnSignIn.Size = New System.Drawing.Size(37, 40)
        Me.btnSignIn.TabIndex = 7
        Me.btnSignIn.UseVisualStyleBackColor = False
        '
        'Products
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackColor = System.Drawing.Color.FromArgb(CType(CType(48, Byte), Integer), CType(CType(54, Byte), Integer), CType(CType(65, Byte), Integer))
        Me.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.ClientSize = New System.Drawing.Size(1366, 768)
        Me.Controls.Add(Me.btnSignIn)
        Me.Controls.Add(Me.btnLogIn)
        Me.Controls.Add(Me.btnCloseApp)
        Me.Controls.Add(Me.imgNosbey)
        Me.Controls.Add(Me.backgroundProducts)
        Me.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None
        Me.Icon = CType(resources.GetObject("$this.Icon"), System.Drawing.Icon)
        Me.Name = "Products"
        Me.Text = "Principal"
        Me.WindowState = System.Windows.Forms.FormWindowState.Maximized
        Me.gbxProducto.ResumeLayout(False)
        Me.gbxProducto.PerformLayout()
        CType(Me.imgProducto, System.ComponentModel.ISupportInitialize).EndInit()
        Me.backgroundProducts.ResumeLayout(False)
        Me.ResumeLayout(False)

    End Sub
    Friend WithEvents gbxProducto As GroupBox
    Friend WithEvents titProducto As Label
    Friend WithEvents imgProducto As PictureBox
    Friend WithEvents lblDescripcion As Label
    Friend WithEvents titDescripcion As Label
    Friend WithEvents lblDenuncia As Label
    Friend WithEvents lblPrecio As Label
    Friend WithEvents Label3 As Label
    Friend WithEvents Label2 As Label
    Friend WithEvents btnIgnorar As Button
    Friend WithEvents btnSuspender As Button
    Friend WithEvents btnBorrar As Button
    Friend WithEvents imgNosbey As Button
    Friend WithEvents backgroundProducts As Panel
    Friend WithEvents BackgroundWorker1 As System.ComponentModel.BackgroundWorker
    Friend WithEvents Label5 As Label
    Friend WithEvents Label1 As Label
    Friend WithEvents Label4 As Label
    Friend WithEvents btnCloseApp As Button
    Friend WithEvents btnLogIn As Button
    Friend WithEvents btnSignIn As Button
End Class
